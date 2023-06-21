import { useEffect, useState } from "react";
import styled from "styled-components";
import { v } from "../../styles/variables";
import {
  Btnicono,
  InputText,
  CrudSupabaseContext,
  ConvertirCapitalize,
  Spinner,
} from "../../index";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { CirclePicker } from "react-color";
import Emojipicker from "emoji-picker-react";
import Swal from "sweetalert2";
export function Registro({ onClose, dataSelect, accion }) {
  const [fileurl, setFileurl] = useState(v.sinfoto);
  const [showPicker, setShowPicker] = useState(false);
  const [emojiselect, setEmojiselect] = useState("😻");
  const [currentColor, setColor] = useState("#F44336");
  const ref = useRef(null);
  const [file, setFile] = useState([]);
  const { insertarCategorias, dataUsuarios,editarCategorias } = CrudSupabaseContext();
  const [estadoProceso, setEstadoproceso] = useState(false);
  function prepararImagen(e) {
    //cargar imagen de la PC
    let filelocal = e.target.files;
    let fileReaderlocal = new FileReader();
    fileReaderlocal.readAsDataURL(filelocal[0]);
    const tipoimg = e.target.files[0];
    setFile(tipoimg);
    if (fileReaderlocal && filelocal && filelocal.length) {
      fileReaderlocal.onload = function load() {
        setFileurl(fileReaderlocal.result);
      };
    }
  }
  function onEmojiClick(emojiObject) {
    setEmojiselect(() => emojiObject.emoji);
    setShowPicker(false);
  }
  function elegirColor(color) {
    setColor(color.hex);
  }
  function abrirImagenes() {
    ref.current.click();
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  async function insertar(data) {
    if (accion === "Editar") {
      const p = {
        descripcion: ConvertirCapitalize(data.descripcion),
        color: currentColor,
        icono: emojiselect,
        id: dataSelect.id,
      };
      try {
        setEstadoproceso(true);
        await editarCategorias(p,file)
        setEstadoproceso(false);
        onClose();
      } catch (error) {
        
      }

    } else {
      const p = {
        descripcion: ConvertirCapitalize(data.descripcion),
        color: currentColor,
        icono: emojiselect,
        idusuario: dataUsuarios.id,
      };
      try {
        const img = file.length;
        if (img != 0) {
          setEstadoproceso(true);
          await insertarCategorias(p, file);
          setEstadoproceso(false);
          onClose();
          
        }
      } catch (error) {}
    }
  }
  useEffect(() => {
    if (accion === "Editar") {
      setEmojiselect(dataSelect.icono);
      setColor(dataSelect.color);
      setFileurl(dataSelect.imagen);
    }
  }, []);
  return (
    <Container>
      {estadoProceso && <Spinner />}

      <div className="sub-contenedor">
        <div className="header">
          <h1>Registro de categorias</h1>
          <span onClick={onClose}>x</span>
        </div>
        <PictureContainer>
          <div className="ContentImage">
            <img src={fileurl}></img>
          </div>
          <Btnicono
            funcion={abrirImagenes}
            titulo="+imagen"
            textcolor="#fff"
            bgcolor="transparent"
            icono={<v.iconosupabase />}
          />
          <input
            type="file"
            ref={ref}
            onChange={(e) => prepararImagen(e)}
          ></input>
        </PictureContainer>
        <form className="formulario" onSubmit={handleSubmit(insertar)}>
          <section>
            <div>
              <InputText
                defaultValue={dataSelect.descripcion}
                register={register}
                placeholder="Descripcion"
                errors={errors}
                style={{ textTransform: "capitalize" }}
              />
            </div>
            <div className="colorContainer">
              <ContentTitle>
                {<v.paletacolores />}
                <span>Color</span>
              </ContentTitle>
              <div className="colorPickerContent">
                <CirclePicker onChange={elegirColor} color={currentColor} />
              </div>
            </div>
            <div>
              <ContentTitle>
                <input
                  value={emojiselect}
                  type="text"
                  onClick={() => setShowPicker(!showPicker)}
                ></input>
                <span>icono</span>
              </ContentTitle>
              {showPicker && (
                <ContainerEmojiPicker>
                  <Emojipicker onEmojiClick={onEmojiClick} />
                </ContainerEmojiPicker>
              )}
            </div>
            <div className="btnguardarContent">
              <Btnicono
                bgcolor="#C3D97B"
                textcolor="#374213"
                titulo="Guardar"
                icono={<v.iconoreact />}
              />
            </div>
          </section>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  .sub-contenedor {
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    box-shadow: -10px 15px 30px rgba(10, 9, 9, 0.4);
    padding: 13px 36px 20px 36px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      h1 {
        font-size: 20px;
        font-weight: 500;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerContent {
            padding-top: 15px;
            min-height: 50px;
          }
        }
      }
    }
  }
`;
const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .ContentImage {
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100px;
      object-fit: cover;
    }
  }
  input {
    display: none;
  }
`;
const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  svg {
    font-size: 25px;
  }
  input {
    border: none;
    outline: none;
    background: transparent;
    padding: 2px;
    width: 40px;
    font-size: 28px;
  }
`;
const ContainerEmojiPicker = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
