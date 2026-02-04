import leia from "readline-sync"
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
export function main(): void {
    let opcao: number;


    // Instanciar objetos da Classe Conta

    const c1 = new Conta(1, 1234, "Sofia", 1, 100000.00);

    c1.visualizar();

    //Testes do metodo Sacar

    console.log("Sacar 100,00: ", c1.sacar(100.00));
    console.log("Sacar 200000,00: ", c1.sacar(200000.00));
    console.log("Sacar 0,00: ", c1.sacar(0.00));

    //Teste do metodo depositar

    console.log("Depositar -10,00: ");
    c1.depositar(-10.00);

    console.log("Depositar 500,00: ");
    c1.depositar(500.00);

    c1.visualizar();


    while(true){

        console.log(colors.bg.black, colors.fg.yellow,
                    "********************************************************")
        console.log("                                                        ")
        console.log("                                                        ")
        console.log("                 BANCO DO BRAZIL COM Z                  ")
        console.log("                                                        ")
        console.log("                                                        ")
        console.log("********************************************************")
        console.log("                                                        ")
        console.log("                                                        ")
        console.log("                1 - Criar Conta                         ")
        console.log("                2 - Listar todas as contas              ")
        console.log("                3 - Buscar Conta por Numero             ")
        console.log("                4 - Atualizar Dados das Contas          ")
        console.log("                5 - Apagar conta                        ")
        console.log("                6 - Sacar                               ")
        console.log("                7 - Depositar                           ")
        console.log("                8 - Transferir Valores Entre Contas     ")
        console.log("********************************************************")
        console.log("                                                        ",
        colors.reset);


        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if(opcao == 9){
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu futuro comeca aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                break;
        }
    }

}
export function sobre(): void{
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Renan Ferreira Soares de Lima - renanferreiraslima@gmail.com");
    console.log("*****************************************************");
    }
main();