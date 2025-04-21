export const useViewersFormat = () => {
    const formatViewers = (viewerCount: number): string => {
      if (viewerCount >= 1000000) {
        return (viewerCount / 1000000).toFixed(1) + 'M';
      } else if (viewerCount >= 1000) {
        return (viewerCount / 1000).toFixed(1) + 'K';
      } else {
        return viewerCount.toString();
      }
    };
  
    return { formatViewers };
  };