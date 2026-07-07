export function Button({children}: {children: React.ReactNode}) {

  return (

    <button onClick={() => alert("hello")}>{children}</button>

  );
};
