import MyNavbar from "./Navbar";


export default function Layout(props) {
    return (
        <>
            <MyNavbar/>
            <main className='min-vh-100 bg-info'>{props.children}</main>

        </>
    )
}
