import { useState } from "react";

function Formulaire() {
  const [isTermAccepted, setIsTermAccepted] = useState(false);

  return (
    <>
      <form action="">
        <CGUCheckBox
          checked={isTermAccepted}
          onCheck={setIsTermAccepted}
        ></CGUCheckBox>
        <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
      </form>
    </>
  );
}

function CGUCheckBox({ checked, onCheck }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheck(e.target.checked)}
        />
        Accepter les conditions d'utilisation
      </label>
    </div>
  );
}

export { Formulaire };
