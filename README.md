

# **POC  - Superhero Stats Viewer**

Este repositório apresenta uma aplicação que consome a [Superhero API](https://superheroapi.com/) para exibir informações e estatísticas de super-heróis de maneira visual e interativa. A aplicação foi construída utilizando Next.js e demonstra como usar hooks do React para consumir APIs e renderizar componentes de forma dinâmica.

---

### **Status do Projeto**

✅ **Projeto Concluído**

---

### **Pré-requisitos**

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)

Além disso, é recomendado utilizar um editor de texto para trabalhar com o código, como [VSCode](https://code.visualstudio.com/).

---

### **🎲 Rodando o Projeto**

```bash
# Clone este repositório
$ git clone <https://github.com/KauaAlencar/SuperHeroe>

# Acesse a pasta do projeto no terminal/cmd
$ cd my-heroes-app

# Instale as dependências
$ npm install

# Execute o servidor de desenvolvimento
$ npm run dev

# O projeto estará disponível em http://localhost:3000
```

---

### **Estrutura do Projeto**

A aplicação é um único componente renderizado em `pages/index.js`. O código utiliza `useState` e `useEffect` para realizar chamadas à API e exibir as estatísticas dos heróis.

| **Pasta/Arquivo** | **Descrição**                              |
|--------------------|--------------------------------------------|
| `pages/index.js`   | Contém o código principal da aplicação.    |
| `styles/globals.css` | Define o estilo global da aplicação.       |

---

### **Recursos e Funcionalidades**

- **Consumo de API:** Utiliza a Superhero API para obter informações detalhadas dos heróis.
- **Apresentação Visual:** Renderiza estatísticas como inteligência e força com barras de progresso estilizadas.
- **Responsividade:** O layout é adaptado para diferentes tamanhos de tela usando Flexbox.

---

### **Conteúdo e Uso**

1. **Estilo Visual**
   - As estatísticas dos heróis são exibidas como barras de progresso estilizadas, destacando atributos como:
     - **Intelligence** (Inteligência)
     - **Strength** (Força)

2. **Estrutura de Renderização**
   - Cada herói é representado por um card com as seguintes informações:
     - Imagem do herói
     - Nome
     - Estatísticas (Inteligência e Força)

3. **Fluxo de Dados**
   - Os IDs dos heróis são definidos no código e usados para buscar informações na API.
   - A aplicação utiliza `fetch` para consumir dados e `useEffect` para garantir que as chamadas sejam feitas ao carregar a página.

---

### **Detalhamento do Código**

#### Consumo da API
A aplicação usa a seguinte função para buscar informações sobre os heróis:

```javascript
const fetchHero = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`);
    const data = await response.json();
    return {
      name: data.name,
      intelligence: data.powerstats.intelligence,
      strength: data.powerstats.strength,
      image: data.image.url,
    };
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
};
```

#### Exibição Visual
Os dados recebidos são mapeados para criar um card para cada herói:

```jsx
<article key={index}>
  <img src={hero.image} alt={`${hero.name} image`} />
  <h1>{hero.name}</h1>
  <p>
    Intelligence: 
    <span style={{ width: `${hero.intelligence}%`, backgroundColor: "#F9B32F" }}></span>
  </p>
  <p>
    Strength: 
    <span style={{ width: `${hero.strength}%`, backgroundColor: "#FF7C6C" }}></span>
  </p>
</article>
```

---

### **Colaboradores**
<table>
  <tr>
    <td align="center"><a href="https://github.com/KauaAlencar"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/172075258?v=4" width="100px;" alt=""/><br /><sub><b>Kauã Alencar</b></sub></a><br /><a href="https://www.linkedin.com/in/kau%C3%A3-alencar-b15119215/" title="Linkedin">🚀</a></td>
    <td align="center"><a href="https://github.com/GuilhermeShinohara"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/180458966?v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Shinohara</b></sub></a><br /><a href="https://github.com/GuilhermeShinohara" title="GitHub">🚀</a></td>
    <td align="center"><a href="https://github.com/LeoFavaron"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/179886009?v=4" width="100px;" alt=""/><br /><sub><b>Leonardo Favaron</b></sub></a><br /><a href="https://github.com/LeoFavaron" title="GitHub">🚀</a></td>
      <td align="center"><a href="https://github.com/lucas-ricci-pathbit"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/174811028?v=4" width="100px;" alt=""/><br /><sub><b>Lucas Ricci</b></sub></a><br /><a href="https://github.com/lucas-ricci-pathbit" title="Linkedin">🚀</a></td>
  </tr>
</table>

---

### **📝 Licença**

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.
