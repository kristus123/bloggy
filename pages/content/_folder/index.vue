<template>
  <div>
    <TextTitle :title="$route.params.folder" />
    <SearchArticle :folder="$route.params.folder" />
  </div>
</template>