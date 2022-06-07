import CatalogSector from './catalogSector.js'


export default function Catalog(){
    return <div className="catalog column">
        <CatalogSector/>
        <CatalogSector/>
        <CatalogSector/>
        <CatalogSector/>
        <CatalogSector/>
    </div>
}