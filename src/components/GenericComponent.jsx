export default function GenericComponent({ children }) {
    return (
        <>
            <h3>HTML passado pelo componente pai</h3>
            {children}
        </>
    )
}