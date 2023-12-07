import { cn } from "@/lib/utils";

const LoadingButton = ({ isLoading, styleProp, type = 'button', onClickAction, content }) => {
  return (
    <button
      className={cn("btn", styleProp)}
      type={type}
      onClick={onClickAction}
      data-testid="loading-button"
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