<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <div class="text-center py-16">
          <h1 class="text-4xl font-bold mb-4">Document Not Found</h1>
          <p class="text-lg mb-4">Sorry, the document you are looking for does not exist.</p>
          <a href="/" class="text-primary underline">Go back to the homepage</a>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
