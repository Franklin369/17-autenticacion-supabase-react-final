import styled from "styled-components";

export function InputText({
  style,
  onChange,
  defaultValue,
  placeholder,
  register,
  errors,
}) {
  return (
    <Container>
      <input
        style={style}
        onChange={onChange}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register("descripcion", { required: true, minLength: 2 })}
      >
      
      </input>
        {errors.descripcion?.type === "required" && <p>Campo requerido</p>}
        {errors.descripcion?.type === "minLength" && <p>Debe tener al menos 2 caracteres</p>}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  input {
    background: ${({ theme }) => theme.bgtotal};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: solid 1px grey;
    color: ${({ theme }) => theme.text};
    outline: none;
    &:focus {
      border-bottom: none;
    }
    &::placeholder {
      color: #c8c8c8;
    }
  }
  p{
    color: #ff6d00;
    font-size:12px;
  }
`;
