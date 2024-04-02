export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <footer className="bg-slate-900 text-white py-6">
            <div className="container flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
                <div>
                    Copyright &copy; {currentYear} art
                    <span className="text-menuBgSecondary">&</span>web - All
                    Rights Reserved
                </div>
                <div className="italic text-xl font-light md:pr-2">
                    ...Always on your side
                </div>
            </div>
        </footer>
    );
}
