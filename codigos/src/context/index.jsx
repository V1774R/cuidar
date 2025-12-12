import { createContext, useReducer } from "react";

const alunosFake = [
    {
        nome: "Maria Silva",
        idade: 8,
        tipoSanguineo: "O+",
        alergias: ["Amendoim", "Camarão"],
        doencas: ["Asma"],
        remediosUsoContinuo: ["Dipirona"],
        medicacoesEmergencia: ["Bombinha de Salbutamol"],
        planoSaude: "Unimed",
        contatos: {
            pai: null,
            mae: null,
            responsavel: "Avó - Claudiane Pires da Silva - 81912333344"
        },
        contatoMedico: "Dra. Fernanda - Pneumologista - (81) 91234-5678",
        observacoes: "Evitar atividades físicas intensas sem supervisão. Sempre carregar bombinha.",
        classe: "3° ano",
        turno: "manhã"
    },
    {
        nome: "Pedro Santos",
        idade: 9,
        tipoSanguineo: "A-",
        alergias: [],
        doencas: [],
        remediosUsoContinuo: [],
        medicacoesEmergencia: [],
        planoSaude: "SulAmérica",
        contatos: {
            pai: "Carlos Santos - (81) 98888-1111",
            mae: "Ana Santos - (81) 98888-2222",
            responsavel: "Ana Santos - (81) 98888-2222"
        },
        contatoMedico: "Dr. Paulo - Pediatra - (81) 93456-7890",
        observacoes: "Criança saudável, sem restrições conhecidas.",
        classe: "4° ano",
        turno: "tarde"
    },
    {
        nome: "Carla Souza",
        idade: 7,
        tipoSanguineo: "B+",
        alergias: ["Lactose"],
        doencas: ["Dermatite atópica", "Rinite alérgica"],
        remediosUsoContinuo: ["Antialérgico"],
        medicacoesEmergencia: ["Pomada de corticoide prescrita", "Antihistamínico oral"],
        planoSaude: "Bradesco Saúde",
        contatos: {
            pai: "Carlos Souza - (81) 97777-3333",
            mae: "Mariana Souza - (81) 95555-2222",
            responsavel: "Carlos Souza - (81) 97777-3333"
        },
        contatoMedico: "Dra. Juliana - Dermatologista - (81) 94567-1234",
        observacoes: "Evitar alimentos com leite. Atenção a crises de coceira intensa.",
        classe: "2° ano",
        turno: "manhã"
    },
    {
        nome: "Lucas Pereira",
        idade: 10,
        tipoSanguineo: "AB+",
        alergias: ["Pólen"],
        doencas: ["Rinite alérgica"],
        remediosUsoContinuo: ["Loratadina"],
        medicacoesEmergencia: ["Spray nasal"],
        planoSaude: "Hapvida",
        contatos: {
            pai: "Marcos Pereira - (81) 95555-1234",
            mae: "Juliana Pereira - (81) 96666-2222",
            responsavel: "Marcos Pereira - (81) 95555-1234"
        },
        contatoMedico: "Dr. André - Alergista - (81) 97654-3210",
        observacoes: "Evitar exposição prolongada em ambientes com poeira.",
        classe: "5° ano",
        turno: "tarde"
    },
    {
        nome: "Ana Beatriz Lima",
        idade: 6,
        tipoSanguineo: "O-",
        alergias: ["Glúten"],
        doencas: ["Intolerância alimentar"],
        remediosUsoContinuo: [],
        medicacoesEmergencia: ["Carvão ativado"],
        planoSaude: "Unimed",
        contatos: {
            pai: "Paulo Lima - (81) 93333-1111",
            mae: "Paula Lima - (81) 93333-4444",
            responsavel: "Paula Lima - (81) 93333-4444"
        },
        contatoMedico: "Dra. Camila - Gastroenterologista - (81) 94567-9876",
        observacoes: "Evitar alimentos com trigo e derivados.",
        classe: "1° ano",
        turno: "manhã"
    },
    {
        nome: "Rafael Almeida",
        idade: 11,
        tipoSanguineo: "A+",
        alergias: [],
        doencas: ["Miopia"],
        remediosUsoContinuo: [],
        medicacoesEmergencia: [],
        planoSaude: "Amil",
        contatos: {
            pai: "José Almeida - (81) 92222-5555",
            mae: "Carla Almeida - (81) 95555-4444",
            responsavel: "José Almeida - (81) 92222-5555"
        },
        contatoMedico: "Dr. Roberto - Oftalmologista - (81) 93456-1111",
        observacoes: "Usar óculos durante todas as atividades escolares.",
        classe: "6° ano",
        turno: "tarde"
    },
    {
        nome: "Maria Costa",
        idade: 8,
        tipoSanguineo: "B-",
        alergias: ["Picada de abelha"],
        doencas: [],
        remediosUsoContinuo: [],
        medicacoesEmergencia: ["Adrenalina auto-injetável"],
        planoSaude: "Bradesco Saúde",
        contatos: {
            pai: "Fernando Costa - (81) 98888-6666",
            mae: "Fernanda Costa - (81) 98888-6666",
            responsavel: "Fernanda Costa - (81) 98888-6666"
        },
        contatoMedico: "Dr. Marcelo - Imunologista - (81) 97890-2222",
        observacoes: "Sempre carregar a caneta de adrenalina.",
        classe: "3° ano",
        turno: "manhã"
    },
    {
        nome: "Gabriel Oliveira",
        idade: 9,
        tipoSanguineo: "O+",
        alergias: [],
        doencas: ["Diabetes tipo 1"],
        remediosUsoContinuo: ["Insulina"],
        medicacoesEmergencia: ["Glicose oral"],
        planoSaude: "SulAmérica",
        contatos: {
            pai: "Paulo Oliveira - (81) 97777-1111",
            mae: "Patrícia Oliveira - (81) 97777-8888",
            responsavel: "Patrícia Oliveira - (81) 97777-8888"
        },
        contatoMedico: "Dra. Helena - Endocrinologista - (81) 93456-3333",
        observacoes: "Monitorar glicemia antes das refeições.",
        classe: "4° ano",
        turno: "tarde"
    },
    {
        nome: "Sofia Mendes",
        idade: 7,
        tipoSanguineo: "A+",
        alergias: ["Frutos do mar"],
        doencas: [],
        remediosUsoContinuo: [],
        medicacoesEmergencia: ["Antihistamínico oral"],
        planoSaude: "Unimed",
        contatos: {
            pai: "Rodrigo Mendes - (81) 96666-7777",
            mae: "Carolina Mendes - (81) 95555-3333",
            responsavel: "Rodrigo Mendes - (81) 96666-7777"
        },
        contatoMedico: "Dr. Felipe - Pediatra - (81) 94567-4444",
        observacoes: "Evitar contato com alimentos de origem marinha.",
        classe: "2° ano",
        turno: "manhã"
    },
    {
        nome: "Thiago Barbosa",
        idade: 12,
        tipoSanguineo: "AB-",
        alergias: [],
        doencas: ["Epilepsia"],
        remediosUsoContinuo: ["Carbamazepina"],
        medicacoesEmergencia: ["Diazepam retal"],
        planoSaude: "Hapvida",
        contatos: {
            pai: "Carlos Barbosa - (81) 95555-9999",
            mae: "Luciana Barbosa - (81) 95555-9999",
            responsavel: "Luciana Barbosa - (81) 95555-9999"
        },
        contatoMedico: "Dr. Sérgio - Neurologista - (81) 97890-5555",
        observacoes: "Evitar atividades com risco de queda sem supervisão.",
        classe: "7° ano",
        turno: "tarde"
    }
];


const usuariosFake = [
    {
        id: "1",
        nome: "Victor Almeida",
        matricula: 1109936,
        senha: "000000",
        ativo: true,

        // Identificação
        cpf: "000.000.000-01",
        cargo: "Professor",

        // Contato
        email: "victor.almeida@escola.com",
        telefone: "81 90000-0001",

        // Institucional
        setor: "Educação Infantil",

        // Lei Lucas
        primeirosSocorros: {
            capacitado: true,
            dataCurso: "2024-03-10",
            validade: "2026-03-10"
        }
    },

    {
        id: "2",
        nome: "Victor Sousa",
        matricula: 1115308,
        senha: "000000",
        ativo: true,

        // Identificação
        cpf: "000.000.000-02",
        cargo: "Auxiliar Administrativo",

        // Contato
        email: "victor.sousa@escola.com",
        telefone: "81 90000-0002",

        // Institucional
        setor: "Secretaria",

        // Lei Lucas
        primeirosSocorros: {
            capacitado: true,
            dataCurso: "2024-02-15",
            validade: "2026-02-15"
        }
    },

    {
        id: "3",
        nome: "Bruno Dourado",
        matricula: 1118323,
        senha: "000000",
        ativo: true,

        // Identificação
        cpf: "000.000.000-03",
        cargo: "Coordenador",

        // Contato
        email: "bruno.dourado@escola.com",
        telefone: "81 90000-0003",

        // Institucional
        setor: "Coordenação Geral",

        // Lei Lucas
        primeirosSocorros: {
            capacitado: true,
            dataCurso: "2023-11-20",
            validade: "2025-11-20"
        }
    },

    {
        id: "4",
        nome: "Usuário de Teste",
        matricula: "000000",
        senha: "000000",
        ativo: true,

        // Identificação
        cpf: null,
        cargo: "Administrador do Sistema",

        // Contato
        email: "teste@sistema.com",
        telefone: null,

        // Institucional
        setor: "TI / Sistema",

        // Lei Lucas
        primeirosSocorros: {
            capacitado: false,
            dataCurso: null,
            validade: null
        }
    }
]


export const Contexto = createContext()


const reducer = (state, action) => {
    switch (action.type) {
        case "ALTERNAR_MENU_SUPERIOR":
            return { ...state, visibilidadeMenu: !state.visibilidadeMenu }
        case "VALIDAR":
            const res = usuariosFake.filter(usuario => usuario.matricula == action.payload.cpf)
            return { ...state, user: res[0], isLoggedIn: true }
        case "SAIR":
            return { ...state, user: null, isLoggedIn: false }
        default:
            return state
    }
}

export const ContextoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        user: null,
        isLoggedIn: false,
        visibilidadeMenu: false,
        dbAlunos: alunosFake, //temporario, vair vir do banco de dados.
        dbUsers: usuariosFake //temporario tbm.
    })
    return (
        <Contexto.Provider value={{ state, dispatch }}>
            {children}
        </Contexto.Provider>

    )
}