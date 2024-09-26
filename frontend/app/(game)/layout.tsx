import Footer from "@/components/Footer";

export default function GameLayout(props:{children:React.ReactNode}) {
    return (
        <div className="flex flex-col justify-between h-screen">
            <div>
                {props.children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}