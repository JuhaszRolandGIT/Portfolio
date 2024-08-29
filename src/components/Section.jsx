export default function Section({title, children, ...cssStlye}){
    return (
        <section {...cssStlye}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}