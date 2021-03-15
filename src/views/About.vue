<template>
  <div class="dark about">
    <div class="article">
      <div class="article-headline">
        <h2>wooow such headline</h2>
      </div>
      <div class="article-content">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      <div class="article-footer">
        <button>Like</button>
        <span class="rep-count">42</span>
        <button>Dislike</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
.about {
  margin: 1rem;
}

.article {
  border: 3px solid black;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0.5rem 0.5rem black;
  transition: 100ms all ease-in-out;
  margin: 2rem 1rem;
  font-family: 'Roboto Condensed', sans-serif;
  max-width: 512px;

  &:hover {
    box-shadow: 0.25rem 0.25rem #333;
  }

  h2 {
    font-family: 'Bebas Neue', cursive;
    font-size: 3rem;
  }

  .article-footer {
    margin-top: 1rem;
  }

  button {
    min-width: 64px;
    border-radius: 5px;
    border: 3px solid black;
    font-family: 'Bebas Neue', cursive;
    color: white;
    background: black;
    font-size: 1rem;
  }

  .rep-count {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
