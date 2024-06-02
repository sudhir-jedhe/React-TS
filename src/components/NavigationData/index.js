window.navigationData = [
    {
        name: 'Home',
        children: [
            {
                name: 'Why Us',
                children: [
                    { name: 'Just Because...', children: [] }
                ]
            },
            {
                name: 'More Info',
                children: [
                    { name: 'Just Because...', children: [] }
                ]
            }
        ]
    },
    {
        name: 'About',
        children: [
            {
                name: 'Why Us',
                children: [
                    { name: 'Just Because...', children: [] }
                ]
            },
            {
                name: 'More Info',
                children: [
                    { name: 'Just Because...', children: [] }
                ]
            }
        ]
    },
    {
        name: 'Careers'
    }
];

function renderNav(data, parentElement) {
    const ul = document.createElement('ul');

    data.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        li.appendChild(a);

        if (item.children && item.children.length > 0) {
            renderNav(item.children, li); // Recursively render children
        }

        ul.appendChild(li);
    });

    parentElement.appendChild(ul);
}

if (document.getElementById('sandbox')) {
    renderNav(window.navigationData, document.querySelector('.content'));
}

export default renderNav;
