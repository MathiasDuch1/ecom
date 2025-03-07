export default function HeaderLayout({ children }: { children: React.ReactNode }) {
    return (
      <header className="w-full border-b border-gray-300 p-4">
        <div className="grid grid-cols-[1fr_2fr_1fr] items-center gap-1 max-w-312 mx-auto max-h-25">
          {children}
        </div>
      </header>
    );
  }