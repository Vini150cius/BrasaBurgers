import React, { useState } from "react";
import { Button } from "react-native";
import Display from "./Display";

export default ({ initial = 0, step = 1 }) => {
  //calculo de função
  const [number, setNumber] = useState(initial);
  const inc = () => setNumber(number + step);
  const dec = () => setNumber(number - step);
  return (
    // retorno da função
    <>
      <Button color={"red"} title={"<"} onPress={dec} />
      <Display number={number} />
      <Button color={"red"} title={">"} onPress={inc} />
    </>
  );
};
