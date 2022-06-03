import Swal from 'sweetalert2';

const confirmButtonColor = 'rgb(59 130 246)'

export const alertError = ( title: string, text: string ) => {
  Swal.fire({
    confirmButtonColor,
    icon: 'error',
    title,
    text,
  })
}

export const alertSuccess = (text: string) => {
  Swal.fire({
    text,
    confirmButtonColor,
  });
}

export const alertWithConfirm = (title: string, textButtonConfirm: string, textButtonDeny: string, callback: any) => {
  Swal.fire({
    title,
    showDenyButton: true,
    confirmButtonText: textButtonConfirm,
    denyButtonText: textButtonDeny,
  }).then((result) => {
    if (result.isConfirmed) {
      callback();
    }
  })
}
