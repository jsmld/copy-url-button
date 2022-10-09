export const App = () => {
  const handleClick = () => {
    let url = document.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        alert("Copied!");
      },
      (error) => {
        alert("Copy error" + error);
      }
    );
  };
  return <button onClick={handleClick}>Copy URL</button>
}
