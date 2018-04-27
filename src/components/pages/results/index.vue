<template>
  <div class="page results">
    <header>
    </header>
    <section class="content">
      <breadcrumb :items="breadcrumb" />
      <finder />
      <article class="results">
        <h2>
          <strong>5 words</strong>
          <span>found for letters</span>
          <em>ADN</em>
        </h2>
        <form>
          <fieldset>
            <legend>Jump to letter words</legend>
            <div class="field size">
              <label for="size">Size</label>
              <select name="size" id="size">
                <option value=""></option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </fieldset>
        </form>
      </article>
      <article>
        <header>
          <h3>
            <span>
              <strong>3</strong>
              <em>letter words</em>
            </span>
            <span>
              <span>(</span>
              <em>Showing</em>
              <strong>1</strong>
              <em>to</em>
              <strong>2</strong>
              <em>of</em>
              <strong>2</strong>
              <span>)</span>
            </span>
          </h3>
        </header>
        <table>
          <thead>
            <tr>
              <td>
                <a href="" title="Sort alphabetically">Word</a>
              </td>
              <td>
                <a href="" title="Sort by Scrabble® Points">Scrabble® Points</a>
              </td>
              <td>
                <a href="" title="Sort by Words With Friends® Points">Words With Friends® Points</a>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="" title="'dan' word">dan</a>
              </td>
              <td>4</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <a href="" title="'dan' word">dan</a>
              </td>
              <td>5</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
        <footer>
          <nav>
            <h4>Browse through:</h4>
            <ul>
              <li>
                <a href="" title="Back to top">Back to top</a>
              </li>
            </ul>
          </nav>
          <form>
            <fieldset>
              <legend>Jump to letter words</legend>
              <div class="field size">
                <label for="size">Size</label>
                <select name="size" id="size">
                  <option value=""></option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </fieldset>
          </form>
        </footer>
      </article>
      <disclaimer />
    </section>
    <footer>
    </footer>
  </div>
</template>

<script src="./composition.js"></script>

<style lang="scss" src="./styles.scss" scoped></style>
