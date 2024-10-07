'use client'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer class="text-center py-3">
            <p>© {year} Amey Shinde. All Rights Reserved.</p>
        </footer>

    );
}

export default Footer;