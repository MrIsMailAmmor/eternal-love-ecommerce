<template>
  <div class="loading-spinner">
    <div class="spinner" />
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff; /* Or your app's background color */
  color: #333;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff; /* A nice blue color */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>