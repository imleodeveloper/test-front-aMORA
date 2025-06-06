import Image from "next/image"


export function Header(){
    return(
        <header>
            <nav>
                <div>
                    <Image src="/logo.png" alt="logo" title="logo" width={150} height={65}/>
                </div>
                <div>
                    <ul>
                        <li>Simulador</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}