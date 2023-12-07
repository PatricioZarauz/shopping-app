import { cn } from "@/lib/utils";

const LoadingButton = ({ isLoading, styleProp, onClickAction, children }) => {
  return (
    <button
      className={cn("btn", styleProp)}
      onClick={onClickAction}
    >
      {isLoading ? (
        <>
          <span class="loading loading-spinner"></span>
          {'loading'}
        </>
      ) : { children }}
    </button>
  );
};

export default LoadingButton;