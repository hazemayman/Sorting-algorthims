Library ieee;
USE ieee.std_logic_1164.ALL;

entity testbench IS 
end entity testbench;

ARCHITECTURE test of testbench IS 

component ErrorChecker Is 
	generic(n : positive := 5);
	PORT(
		clk , reset , load : IN std_logic;
		x : IN std_logic_vector(0 to n-1);
		y : OUT std_logic_vector(1 downto 0));
end component ErrorChecker;
FOR  fsm_mealy_2p : ErrorChecker USE ENTITY work.ErrorChecker (ErrorChecker);
signal clk , reset , load   : std_logic;
signal y : std_logic_vector(1 downto 0);
signal x : std_logic_vector(0 to 5-1);



begin
	fsm_mealy_2p : ErrorChecker port map (clk , reset , load , x , y );

	seqential : process IS 
	begin
		wait for 10ns;
		clk<='0';
		wait for 10ns;
		reset <= '1';
		clk <='1';
		wait for 10 ns;
		assert y = '0' &'0'
			report "error reset"
			SEVERITY warning;

		clk<='0';
		wait for 10ns;
		reset <= '0';
		x<='1'&'0'&'0'&'1'&'1';
		load<='1';
		clk <='1';
		wait for 10 ns;
		clk<='0';
		load<='0';
		assert y = '1'&'1'
			report "error from a to b "
			SEVERITY warning;
		wait for 10 ns;

		clk <='1';
		assert y = '1' &'0'
			report "error from b to c "
			SEVERITY warning;
		wait for 10 ns;
		clk<='0';
		wait for 10 ns;

		clk <='1';
		assert y = '1' &'1'
			report "error from c to a "
			SEVERITY warning;
		wait for 10ns;
		clk<='0';
		wait for 10 ns;
		clk <='1';
		assert y = '1' &'1'
			report "error from a to b "
			SEVERITY warning;
		wait for 10ns;
		clk<='0';
		wait for 10 ns;

		clk <='1';
		assert y = '0' &'1'
			report "error from b to d "
			SEVERITY warning;wait for 10ns;
		clk<='0';

		wait;
		
	end process seqential;

end ARCHITECTURE test;