import "./App.css";


function App() {
  return (
    <>
      <div class="grid grid-cols-3 gap-x-4">
  <div class="col-span-2">Este elemento ocupa dos columnas.</div>
  <div class="row-span-3">Este elemento ocupa tres filas.</div>
  <div>Este es un elemento en la columna 3.</div>
  <div>Este es otro elemento en la columna 3.</div>
  <div class="md:col-span-2">Este elemento ocupa dos columnas en pantallas medianas y grandes.</div>
</div>
    </>
  );
}

export default App;
