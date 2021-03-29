import { ChangeEvent, FC } from "react";
import { DebounceInput } from "react-debounce-input";
import CloseIcon from "assets/CloseIcon";
import "./styles.scss";

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onCancel: () => void;
};

const Input: FC<InputProps> = ({ value, placeholder, onChange, onCancel }) => {
  return (
    <div className="c-input flex-center">
      <DebounceInput
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        value={value}
        debounceTimeout={1500}
        className="c-input__input"
      />
      <button className="c-input__button" onClick={onCancel}>
        <CloseIcon />
      </button>
    </div>
  );
};

export { Input };
