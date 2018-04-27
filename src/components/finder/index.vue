<template>
  <article class="finder">
    <h1 class="title">Word Finder</h1>
    <form>
      <fieldset>
        <legend>Find words</legend>
        <div class="field query">
          <label for="query">Enter Scrabble® tiles here. Use up to two "?" as wildcards.</label>
          <input
            type="text"
            name="query"
            id="query"
            maxlength="12"
          />
        </div>
        <div class="field tiles-persistency">
          <label for="tiles-persistency">Remember Tiles</label>
          <input
            type="checkbox"
            name="tiles-persistency"
            id="tiles-persistency"
            value="true"
          />
        </div>
        <div class="control submit">
          <button type="submit">Search</button>
        </div>
      </fieldset>
    </form>
  </article>
</template>

<script>
export default {
  name: 'Finder',
}
</script>

<style lang="scss" src="./styles.scss" scoped></style>
