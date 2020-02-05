Orientações Gerais

Bem-vindo/a ao processo seletivo para a vaga de desenvolvedor front-end da Audsat.
A proposta do teste é avaliar a vivência no desenvolvimento front-end. Todo o trabalho envolvendo frontend
será avaliado: o entendimento do escopo, a estrutura de CSS/HTML 5 e o Javascript/Typescript.
No nosso teste, você deve desenvolver um sistema com o objetivo de consultar Pokémons (Pokedex). Siga
os requisitos deste guide-line para criar e desenvolver as respectivas telas.
Items de desenvolvimento obrigatórios
• Desenvolvimento em Angular2+ (typeScript), última versão;
• Desenvolver HTML 5, usando as novas tags de forma semântica e seguindo os padrões web;
• Desenvolver o CSS usando SASS ou LESS;
• Aplicar um GRID de layout responsívo, usando Bootstrap 4 ou Angular Material;
• Integração com o serviço PokéAPI (https://pokeapi.co/).
O que será avaliado?
• Lógica de POO aplicada e estruturação de módulos/componentes no angular;
• Uso de Observables (RxJS) nos serviços REST e o adequado gerenciamento de eventEmitters para
compartilhar dados nas classes de serviços e componentes;
• Estrutura do HTML limpa, uso de IDs, classes e atributos data- de forma ponderada;
• Diagramação responsiva dos elementos.
Requisitos de interface
• Os dados do pokémon devem ser apresentado em itens expansíveis (acordeon), usando o Expansion
Panel do Angular Material.
• O fundo das páginas deve ser um degradê radial que vai de #ffffff a #1acbeb, do centro às extremidades.
• Utilizar o select do Angular Material para a barra de busca.
Requisitos para a arquitetura Angular
• A estrutura angular deve ter ao menos os módulos e componentes separados na próxima página;
• Fica a seu critério a arquitetura de serviços;
• Utilize a estratégia preloading para carregamento dos módulos;
• Na barra de busca, a estrutura Reative Forms deve ser usada.
Diferenciais
• Usar animações e transições em CSS3;
• CSS aplicado de forma inteligente, reaproveitando estilos definidos quando necessário;
• Uso de variáveis, pseudo e-ementos no SASS/LESS para definir atributos reutilizáveis (cores, bordas,
etc...);
• Usar algum padrão para a escrita do SASS/LESS;
• Mensagens de erro amigáveis;
• Armazenar a lista completa de pokémons no local storage do navegador ou no componente principal
da aplicação para melhor performance.
• Chamada fake na página inical para as fichas dos Pokémons mais acessados (não requer uso de API);
• Estilizar os componentes padrões do Angular Material;
• Utilizar um plugin de filtro para o select do Angular Material, como o ngx-mat-select-search.
No resto, fique à vontade para usar a criatividade e viajar na confecção da interface da aplicação.
Boa sorte e divirta-se!

PokéAPI
Para nossa aplicação utilizaremos o serviço PokéAPI. Basicamente serão usadas as duas URLs abaixo em
toda a aplicação:
Listar todos os pokémons: https://pokeapi.co/api/v2/pokemon/?limit=1000
Ficha do Pokémon: https://pokeapi.co/api/v2/pokemon/{{id | name}}
Mais informações em https://pokeapi.co/docs/v2.html.