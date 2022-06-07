import { useState, useRef, useEffect } from 'react'
export default function DoubleRange() {
	let lower = 0;
	let upper = 10000;
	let [min, setMin] = useState(lower)
	let [max, setMax] = useState(upper)
	let [width, setWidth] = useState()

	let bar = useRef(null)
	let min_ref = useRef(null)
	let max_ref = useRef(null)
	let shittyBg = useRef(null)
	let max_Input = useRef(null)

	function dragMin(event){
		let barCoord = bar.current.getBoundingClientRect()
		let rightBorder = max_ref.current.getBoundingClientRect().left - 3 * min_ref.current.offsetWidth
		let changeCost = (e) => {
			console.log(rightBorder)
			let computed = e.pageX - min_ref.current.offsetWidth / 2 - barCoord.left;
			let l = computed < 0? 0 : computed > rightBorder? rightBorder : computed;
			changeShittyBg()
			setMin(Math.floor(upper * (l - 0) / width))
		}
		changeCost(event)
		document.onmousemove = (e) => changeCost(e)
		document.onmouseup = () => document.onmousemove = null
	}
	function dragMax(event){
		let barCoord = bar.current.getBoundingClientRect()
		let leftBorder = min_ref.current.getBoundingClientRect().right - 2 * min_ref.current.offsetWidth
		let changeCost = (e) => {
			let computed = e.pageX - max_ref.current.offsetWidth / 2 - barCoord.left;
			let l = computed < leftBorder? leftBorder : computed > width? width : computed;
			changeShittyBg()
			setMax(Math.floor(upper * (l - 0) / width))
		}
		changeCost(event)
		document.onmousemove = (e) => changeCost(e)
		document.onmouseup = () => document.onmousemove = null
	}
	function changeShittyBg(){
		let e = shittyBg.current; 
		e.style.left = min_ref.current.style.left;
		e.style.width = max_ref.current.style.left.slice(0, -2) - min_ref.current.style.left.slice(0, -2) + 'px'
	}

	function left(e){
		if(e * (bar?.current?.offsetWidth || 0)/ upper > width){
			e = width
		}
		else if ( e * (bar?.current?.offsetWidth || 0)/ upper < 0){
			e = 0
		}
		else{
			e = e * (bar?.current?.offsetWidth || 0)/ upper
		}
		return e + 'px'
	}

	useEffect(() => { changeShittyBg(); 
		setWidth(bar.current.offsetWidth)
		
	})
	return <div>
		<div className="cost">
			<div className="text-values">
				<input type="text" value={min} onInput={(e) => setMin(e.target.value < max ? e.target.value : max)}/>
				<input type="text" value={max} onInput={(e) => setMax(e.target.value > min ? e.target.value : min)} ref={max_Input}/>
			</div>
			<div className="range">
				<div className="bar" ref={bar}>
					<div style={{left: `${left(min)}`}} ref={min_ref} className="min" onMouseDown={(e) => dragMin(e)}></div>
					<div style={{left: `${left(max)}`}} ref={max_ref} className="max" onMouseDown={(e) => dragMax(e)}></div>
					<div ref={shittyBg} className="shitty-bg" style={{'--max-width-change': `${left(min)}`}} ></div>
				</div>
			</div>
		</div>
	</div>
}
