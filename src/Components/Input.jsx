export default function Inputs({forName,children,onModify,...restProp}){
    return(
        <div>
            <label htmlFor={forName}>{children}</label>
            <input onChange={onModify} {...restProp} />
        </div>
    )
}