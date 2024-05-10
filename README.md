# Projeto To-Do List

Este é um projeto de lista de tarefas (To-Do List) construído com HTML, CSS e JavaScript. Ele permite aos usuários adicionar novas tarefas, visualizar tarefas existentes, marcar como concluídas e removê-las. O projeto também inclui efeitos visuais como vídeo de fundo e transições animadas para melhorar a experiência do usuário.

## Funcionalidades Principais
- Adicionar novas tarefas com validação para evitar duplicatas e entradas vazias.
- Remover tarefas da lista.
- Persistência de tarefas usando Local Storage.
- Reproduzir sons ao adicionar, remover e quando há erros.
- Vídeo de fundo para uma experiência mais envolvente.
- Animações suaves ao interagir com os botões.

## Tecnologias Utilizadas
- **HTML5**: Para a estrutura do projeto.
- **CSS3**: Para estilização, usando variáveis CSS para manter consistência nas cores e efeitos visuais.
- **JavaScript**: Para a lógica de adição, remoção e persistência de tarefas.
- **Local Storage**: Para armazenar e recuperar as tarefas mesmo após recarregar a página.
- **Vídeo**: Para o plano de fundo animado.

## Como Usar
1. **Clone ou faça download do repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
2.**Abra o arquivo index.html no navegador para iniciar a aplicação.**
3.Para adicionar uma nova tarefa, 
Digite no campo "Digite sua nova task".
Clique no botão com o símbolo de adição.
Um som será reproduzido ao adicionar uma tarefa.
4.Para remover uma tarefa:
Clique no botão de exclusão ao lado da tarefa que deseja remover.
Um som será reproduzido ao excluir uma tarefa.
5.Erros ao adicionar uma tarefa:
Se a tarefa já existir ou o campo estiver vazio, um som de erro será reproduzido e a borda do campo ficará vermelha como alerta.
