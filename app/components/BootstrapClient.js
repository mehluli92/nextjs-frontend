"use client"

import { useEffect } from "react";

function BootstrapClient() {
    useEffect(() => {
        import('bootstrap');
        // import('bootstrap/dist/js/bootstrap.bundle.min.js');
        import('./script');

      }, []);
    
      return null;
}

export default BootstrapClient;