    // Quickstart Modal Functions
    function openQuickstartModal() {
      const modal = document.getElementById('quickstartModal');
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeQuickstartModal() {
      const modal = document.getElementById('quickstartModal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
    }

    // Close modal when clicking outside
    const modal = document.getElementById('quickstartModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeQuickstartModal();
        }
      });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeQuickstartModal();
      }
    });
