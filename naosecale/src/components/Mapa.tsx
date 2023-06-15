import { useState } from "react";
import { Files, MapPin } from "phosphor-react";
import copy from "copy-to-clipboard";
import { Alert, Snackbar } from "@mui/material";

export function Mapa() {
  const [open, setOpen] = useState(false);

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const endereco = 'Praça do Campo Santo, S/N - Santo Amaro, Recife - PE, 50100-160'

  const copyToClipboard = () => {
    copy(endereco);

    setOpen(true);
  }
  return (

    <div className="lg:flex lg:w-full justify-center rounded-md mt-2">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15797.160604879926!2d-34.91757025!3d-8.1734964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1661457244569!5m2!1spt-BR!2sbr"
        width="410"
        height="330"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}