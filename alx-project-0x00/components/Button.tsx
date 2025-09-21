import {ButtonProps} from "@/interfaces";

const Button: React.FC<ButtonProps> = ({title, onClick, size = "medium", shape = "rounded-md", styles = "" }) => {
    const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
    const shapeClasses = {
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-full": "rounded-full"
    };

    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape] || ""} ${styles}`}
        >
            {title}
        </button>
    );
}

export default Button;