document.addEventListener('DOMContentLoaded', function() {
    // Seleciona TODOS os elementos com a classe 'dropdown-toggle'
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    dropdownToggles.forEach(toggle => {
      // Para cada 'dropdown-toggle', encontramos o seu 'dropdown-menu' associado.
      // O menu é o próximo irmão (sibling) da UL dentro do mesmo LI pai.
      const parentLi = toggle.closest('li'); // Encontra o LI pai do toggle
      const dropdownMenu = parentLi.querySelector('.dropdown-menu'); // Procura o menu dentro desse LI pai
  
      if (dropdownMenu) { // Garante que o menu foi encontrado
        let timeoutId; // Variável para armazenar o ID do timeout para este dropdown específico
  
        // Função para mostrar o submenu
        function showDropdown() {
          clearTimeout(timeoutId);
          dropdownMenu.classList.add('show');
        }
  
        // Função para esconder o submenu
        function hideDropdown() {
          timeoutId = setTimeout(() => {
            dropdownMenu.classList.remove('show');
          }, 300); // Esconde após 300ms
        }
  
        // Eventos para o dropdown-toggle (o link pai, ex: "Tópicos")
        toggle.addEventListener('mouseenter', showDropdown);
        toggle.addEventListener('mouseleave', hideDropdown);
  
        // Eventos para o próprio dropdown-menu (o submenu)
        dropdownMenu.addEventListener('mouseenter', showDropdown);
        dropdownMenu.addEventListener('mouseleave', hideDropdown);
  
        // Opcional: Esconder o submenu ao clicar em qualquer lugar fora dele
        // Esta parte precisa ser ligeiramente modificada para lidar com múltiplos dropdowns
        // e pode ser mais complexa. Por enquanto, vamos manter o foco na interação hover.
        // Se você quiser essa funcionalidade, me avise e adaptamos.
        // Por simplicidade para múltiplos dropdowns, pode ser melhor ter um "fechar todos"
        // ou um clique no toggle para alternar.
  
        // Para a funcionalidade de fechar ao clicar fora, você pode fazer algo assim (mais avançado):
        document.addEventListener('click', function(event) {
          // Se o clique não foi dentro do LI pai do dropdown (que contém o toggle e o menu)
          if (!parentLi.contains(event.target)) {
            hideDropdown(); // Esconde este menu específico
          }
        });
      }
    });
  });