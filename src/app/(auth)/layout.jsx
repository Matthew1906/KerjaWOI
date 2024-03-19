
export default function RootLayout({ children }) {
    return (
        <div className="flex justify-center items-center w-100 min-h-screen h-auto bg-dark-purple text-dark-purple">
            {children}
        </div>
    );
  }