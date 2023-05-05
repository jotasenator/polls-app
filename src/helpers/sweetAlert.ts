import Swal from "sweetalert2"

interface SweetProps {
    title: string;
    position: 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end';
    icon: 'success' | "warning" | "error" | "info" | "question";
    timer: number;
    showConfirmButton: boolean;
}

export const sweetAlertHelper = ({ position, icon, title, showConfirmButton, timer }: SweetProps) => {
    Swal.fire({
        position: position,
        icon: icon,
        title: title,
        showConfirmButton: showConfirmButton,
        timer: timer
    })
}

export const sweetTopEndWarning = (title: string) =>
    sweetAlertHelper({
        position: "top-end",
        icon: "warning",
        title: title,
        showConfirmButton: false,
        timer: 1500,
    });

export const sweetCenterSuccess = (title: string) =>
    sweetAlertHelper({
        position: "center",
        icon: "success",
        title: title,
        showConfirmButton: false,
        timer: 1500,
    });

export const sweetCenterFailure = (title: string) =>
    sweetAlertHelper({
        position: "center",
        icon: "error",
        title: title,
        showConfirmButton: false,
        timer: 1500,
    });