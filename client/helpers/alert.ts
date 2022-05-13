import Swal from 'sweetalert2';

export const alertError = ( title: string, text: string ) => {
  Swal.fire({
    confirmButtonColor: 'rgb(59 130 246)',
    icon: 'error',
    title: title,
    text: text,
  })
}
