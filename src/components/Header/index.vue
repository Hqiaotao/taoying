<template>
  <header id="header">
    <h1>涛视影院</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#header {
  widows: 100%;
  height: 50px;
  color: white;
  background-color: blue;
  border-bottom: 1px solid aqua;
  position: relative;
}
#header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
#header i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
</style>