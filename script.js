const cube = document.querySelector('.cube');

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;

    // Function to handle the mousedown event
    function handleMouseDown(event) {
      isDragging = true;
      startX = event.clientX;
      startY = event.clientY;
      offsetX = parseInt(cube.style.left) || 0;
      offsetY = parseInt(cube.style.top) || 0;
    }

    // Function to handle the mousemove event
    function handleMouseMove(event) {
      if (!isDragging) return;

      const newX = offsetX + event.clientX - startX;
      const newY = offsetY + event.clientY - startY;

      cube.style.left = newX + 'px';
      cube.style.top = newY + 'px';
    }

    // Function to handle the mouseup event
    function handleMouseUp() {
      isDragging = false;
    }

    // Add event listeners
    cube.addEventListener('mousedown', handleMouseDown);
    cube.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);