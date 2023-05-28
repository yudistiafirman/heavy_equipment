import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import KontakPict from "./assets/kontak.jpg";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import axios from "axios";
import { apiUrl } from "../../Default";
const Kontak = () => {
  const [name, setName] = useState("");
  const formRef = useRef(null);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorCompany, setErrorCompany] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmailValue, setErrorEmaiValue] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const sendEmail = () => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!name) {
      setErrorName(true);
    } else if (!company) {
      setErrorCompany(true);
    } else if (!email) {
      setErrorEmail(true);
    } else if (!emailRegex.test(email)) {
      setErrorEmaiValue(true);
    } else if (phone.length < 11) {
      setErrorPhone(true);
    } else if (!message) {
      setErrorMessage(true);
    } else {
      const data = new FormData();
      setErrorName(false);
      setErrorCompany(false);
      setErrorEmail(false);
      setErrorEmaiValue(false);
      setErrorPhone(false);
      setErrorMessage(false);

      emailjs
        .sendForm(
          "service_mvp9acl",
          "template_z61imxk",
          formRef.current,
          "bM0ObLWWxVzYi8pAk"
        )
        .then(
          (result) => {
            Swal.fire({
              icon: "success",
              title: "Terima Kasih kami telah menerima pesan anda",
            });
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Something went wrong",
            });
          }
        );
    }
  };

  const onChangeName = (e) => {
    if (e.target.value.length <= 45) {
      setName(e.target.value);
    }
  };

  const onChangeEmail = (e) => {
    if (e.target.value.length <= 45) {
      const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      if (emailRegex.test(e.target.value)) {
        setErrorEmaiValue(false);
        setEmail(e.target.value);
      } else {
        setErrorEmaiValue(true);
        setEmail(e.target.value);
      }
    }
  };

  const onChangeCompany = (e) => {
    if (e.target.value.length <= 45) {
      setCompany(e.target.value);
    }
  };

  const onChangePhone = (e) => {
    if (e.target.value.length <= 15) {
      setPhone(e.target.value);
    }
  };

  const onChangeMessage = (e) => {
    if (e.target.value.length <= 255) {
      setMessage(e.target.value);
    }
  };
  return (
    <div className="latarContainer">
      <div
        style={{
          backgroundImage: `url(${KontakPict})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="jumbotron"
      >
        <div className="jumbotronContent">
          <div className="subMenuCampaign">
            <div className="textWithBtn">
              <div className="heroMediumText">KONTAK</div>
              <div className="heroOrangeText">KAMI</div>
            </div>
          </div>
        </div>
      </div>
      <div className="latarContentContainer">
        <div className="latarContentDesc">
          <div className="latarTitle">Halo, kami disini</div>
          <div style={{ marginBottom: "38px" }} className="latarContent">
            Apabila anda memiliki pertanyaan atau membutuhkan informasi lebih
            lanjut, Anda dapat menghubungi kami melalui telepon atau mengirim
            email dengan mengisinya pada formulir dibawah ini
          </div>
          <form ref={formRef}>
            <div style={{ width: "97%", marginBottom: "40px" }}>
              <TextField
                fullWidth
                label="Nama Lengkap"
                variant="filled"
                color="success"
                type="text"
                name="name"
                value={name}
                helperText={`${name.length}/45`}
                onChange={onChangeName}
              />
              {errorName && (
                <div
                  className="latarContent"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                  }}
                >
                  nama tidak boleh kosong
                </div>
              )}
            </div>

            <div style={{ width: "97%", marginBottom: "40px" }}>
              <TextField
                fullWidth
                label="Perusahaan"
                variant="filled"
                color="success"
                name="company"
                type="text"
                helperText={`${company.length}/45`}
                onChange={onChangeCompany}
                value={company}
              />
              {errorCompany && (
                <div
                  className="latarContent"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                  }}
                >
                  nama perusahaan tidak boleh kosong
                </div>
              )}
            </div>
            <div style={{ width: "97%", marginBottom: "40px" }}>
              <TextField
                fullWidth
                label="Alamat Email*"
                variant="filled"
                color="success"
                type="email"
                name="email"
                helperText={`${email.length}/45`}
                value={email}
                onChange={onChangeEmail}
              />
              {errorEmail && (
                <div
                  className="latarContent"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                  }}
                >
                  email tidak boleh kosong
                </div>
              )}
              {errorEmailValue && (
                <div
                  className="latarContent"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                  }}
                >
                  format email salah
                </div>
              )}
            </div>
            <div style={{ width: "97%", marginBottom: "40px" }}>
              <TextField
                fullWidth
                label="Nomor Telepon*"
                variant="filled"
                color="success"
                name="phone"
                type="number"
                helperText={`${phone.length}/15`}
                value={phone}
                onChange={onChangePhone}
              />
              {errorPhone && (
                <div
                  className="latarContent"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                  }}
                >
                  No tidak valid sebagai no telepon
                </div>
              )}
            </div>

            <div style={{ width: "97%", marginBottom: "40px" }}>
              <TextField
                fullWidth
                label="Pesan*"
                variant="filled"
                color="success"
                type="text"
                name="message"
                multiline
                helperText={`${message.length}/255`}
                value={message}
                onChange={onChangeMessage}
              />
              {errorMessage && (
                <div
                  className="latarContent"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontStyle: "italic",
                  }}
                >
                  Pesan tidak boleh kosong
                </div>
              )}
            </div>
          </form>
          <div className="lihatDetailPelayananCard">
            <div
              onClick={sendEmail}
              style={{ cursor: "pointer" }}
              className="lihatDetailDesc"
            >
              Kirim Pesan
            </div>
          </div>
          <div
            style={{
              width: "97%",
              marginBottom: "40px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></div>
        </div>
        <div>
          <div className="latarTitle">PT.Heavy Equipment Centre </div>
          <div
            style={{ width: "100%", fontSize: "15px" }}
            className="latarContent"
          >
            Jl. Soekarno Hatta No 633A, Sukapura,
          </div>
          <div style={{ marginBottom: "32px" }} className="latarContent">
            Kiaracondong, Bandung, Jawa Barat 40285
          </div>
          <div style={{ marginBottom: "8px" }} className="latarTitle">
            Telepon{" "}
          </div>
          <div style={{ marginBottom: "32px" }} className="latarContent">
            <a
              href="tel:+68112131122"
              style={{ color: "blue", borderBottom: "blue" }}
            >
              +62 8112131122
            </a>
          </div>
          <div style={{ marginBottom: "8px" }} className="latarTitle">
            Email{" "}
          </div>
          <div style={{ marginBottom: "32px" }} className="latarContent">
            <a
              href="mailto:hequipmentcentre@gmail.com"
              style={{ color: "blue", borderBottom: "blue" }}
            >
              hequipmentcentre@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
