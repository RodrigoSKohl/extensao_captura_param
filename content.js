const checkInterval = 500; // Intervalo de verificação em milissegundos
let attempts = 0; // Inicializa contador
const maxAttempts = 10; // Número máximo de tentativas, total de vezes que o intervalo de verificação será executado

function redirectIfReady() {
  const url = new URL(window.location.href); // Inicializa objeto com a URL

  if (url.pathname.includes('/typ')) { // Verifica se no path existe /typ
    // Verifica se há parâmetros de consulta
    if (url.search) {
      // Monta a nova URL com os parâmetros de consulta
      const newUrl = `https://suasaudemental.com.br/${url.search}`;
      
      // Redireciona para a nova URL
      window.location.href = newUrl;
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(redirectIfReady, checkInterval); // Tenta novamente após o intervalo
    }
  }
}

// Inicia a verificação
redirectIfReady();