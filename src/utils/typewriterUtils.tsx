export const typeWriter = (
  name: string,
  setNewName: React.Dispatch<React.SetStateAction<string>>,
  delay = 600,
  resetDelay = 2000
) => {
  let index = 1;

  const type = () => {
    setNewName(name.slice(0, index));
    index++;

    if (index <= name.length) {
      setTimeout(type, delay);
    } else {
      setTimeout(() => {
        setNewName("");
        index = 1;
        type();
      }, resetDelay);
    }
  };

  type();
};
