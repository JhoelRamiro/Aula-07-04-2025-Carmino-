// src/components/Hello.tsx
type HelloProps = {
    readonly name: string;
}          //Props indica que vai colocar propriedades no arquivo Hello

export function Hello({name}: HelloProps){
    return (
        <h1>Olá, {name}!</h1>
    );
}


//sonarQube é uma extensão