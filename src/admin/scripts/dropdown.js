// src/admin/scripts/dropdown.js

export const initDropdowns = () => {
  document.querySelectorAll('[data-toggle="dropdown"]').forEach(button => {
    button.addEventListener('click', function (e) {
      e.stopPropagation(); // Stop document click from firing

      const dropdown = this.parentElement;
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');

      // Close other dropdowns
      document.querySelectorAll('.dropdown').forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          const otherMenu = otherDropdown.querySelector('.dropdown-menu');
          otherDropdown.classList.remove('show');
          if (otherMenu) {
            otherMenu.classList.remove('dropdown-menu-top', 'dropdown-menu-left', 'dropdown-menu-right');
          }
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle('show');

      if (dropdownMenu) {
        const rect = dropdownMenu.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const spaceLeft = rect.left;
        const spaceRight = window.innerWidth - rect.right;

        dropdownMenu.classList.remove('dropdown-menu-top', 'dropdown-menu-left', 'dropdown-menu-right');

        if (spaceBelow < rect.height && spaceAbove >= rect.height) {
          dropdownMenu.classList.add('dropdown-menu-top');
        } else if (spaceRight < rect.width && spaceLeft >= rect.width) {
          dropdownMenu.classList.add('dropdown-menu-left');
        } else if (spaceLeft < rect.width && spaceRight >= rect.width) {
          dropdownMenu.classList.add('dropdown-menu-right');
        }
      }
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.classList.remove('show');
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.remove('dropdown-menu-top', 'dropdown-menu-left', 'dropdown-menu-right');
      }
    });
  });
};
export const initDropdownsDashboard = () => {
  document.querySelectorAll('[data-toggle="dropdown1"]').forEach(button => {
    button.addEventListener('click', function (e) {
      e.stopPropagation(); // Stop document click from firing

      const dropdown = this.parentElement;
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');

      // Close other dropdowns
      document.querySelectorAll('.dropdown').forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          const otherMenu = otherDropdown.querySelector('.dropdown-menu');
          otherDropdown.classList.remove('show');
          if (otherMenu) {
            otherMenu.classList.remove('dropdown-menu-top', 'dropdown-menu-left', 'dropdown-menu-right');
          }
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle('show');

      if (dropdownMenu) {
        const rect = dropdownMenu.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const spaceLeft = rect.left;
        const spaceRight = window.innerWidth - rect.right;

        dropdownMenu.classList.remove('dropdown-menu-top', 'dropdown-menu-left', 'dropdown-menu-right');

        if (spaceBelow < rect.height && spaceAbove >= rect.height) {
          dropdownMenu.classList.add('dropdown-menu-top');
        } else if (spaceRight < rect.width && spaceLeft >= rect.width) {
          dropdownMenu.classList.add('dropdown-menu-left');
        } else if (spaceLeft < rect.width && spaceRight >= rect.width) {
          dropdownMenu.classList.add('dropdown-menu-right');
        }
      }
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.classList.remove('show');
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.remove('dropdown-menu-top', 'dropdown-menu-left', 'dropdown-menu-right');
      }
    });
  });
};
