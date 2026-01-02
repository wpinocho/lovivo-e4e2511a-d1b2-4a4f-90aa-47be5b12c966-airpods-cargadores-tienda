export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center gap-2 group">
      <img 
        src="/logo.svg" 
        alt="TechPremium Logo"
        className="h-9 w-9 object-contain transition-transform group-hover:scale-105" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-xl font-bold text-foreground">
        TechPremium
      </span>
    </a>
  )
}