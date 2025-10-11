interface ProductViewerProps {
  image: string;
  name: string;
}

export const ProductViewer = ({ image, name }: ProductViewerProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};
