import { cn } from "@/lib/utils";

const LoadingButton = ({ isLoading, styleProp, type = 'button', onClickAction, content }) => {
  return (
    <button
      className={cn("btn", styleProp)}
      type={type}
      onClick={onClickAction}
    >
      {isLoading ? (
        <>
          <span className="loading loading-spinner"></span>
          {'loading'}
        </>
      ) : (content)}
    </button>
  );
};

export default LoadingButton;